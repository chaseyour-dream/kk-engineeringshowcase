// Example React Component - File List

'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';

interface File {
  id: number;
  file_no: string;
  created_by_name: string;
  created_at: string;
  movement_count: number;
}

export default function FileList() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchFiles();
  }, [search]);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      
      const response = await fetch(`/api/files/?${params}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch files');
      const data = await response.json();
      setFiles(data);
      setError(null);
    } catch (err) {
      setError('Failed to load files');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure?')) return;
    
    try {
      const response = await fetch(`/api/files/${id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to delete file');
      setFiles(files.filter((f) => f.id !== id));
    } catch (err) {
      setError('Failed to delete file');
    }
  };

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="file-list">
      <div className="header">
        <h1>Files</h1>
        <input
          type="text"
          placeholder="Search files..."
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {files.length === 0 ? (
        <p>No files found</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>File No</th>
              <th>Created By</th>
              <th>Date</th>
              <th>Movements</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file: File) => (
              <tr key={file.id}>
                <td>{file.file_no}</td>
                <td>{file.created_by_name}</td>
                <td>{new Date(file.created_at).toLocaleDateString()}</td>
                <td>{file.movement_count}</td>
                <td>
                  <button onClick={() => handleDelete(file.id)} className="btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
