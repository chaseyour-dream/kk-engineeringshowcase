# Chatbot Feature Guide

## Overview
The chatbot feature allows visitors to get instant answers to common questions with smart FAQ suggestions and enables live chat with admin support.

## Features

### 1. Smart FAQ System
- Predefined questions and answers that visitors can click
- FAQ suggestions appear throughout the conversation
- Real-time filtering: FAQs filter as user types
- Shows top 3 relevant suggestions based on input
- Admin can add/edit FAQs from Django admin panel

### 2. Live Chat
- Visitors can type custom messages
- Admin can respond in real-time from Django admin
- All conversations are saved with session tracking
- User names displayed for personalized support

### 3. User Interface
- Floating green chat button in bottom-right corner
- Name collection on first interaction
- Smooth animations and transitions
- Always-visible FAQ suggestions
- Mobile-responsive design
- Auto-scrolling to latest messages

## Admin Usage

### Adding FAQs
1. Go to Django Admin: `http://localhost:8000/admin/`
2. Navigate to "Chatbot FAQs"
3. Click "Add Chatbot FAQ"
4. Fill in:
   - Question: The question visitors will see
   - Answer: The automatic response
   - Order: Display order (lower numbers appear first)
   - Is Active: Check to make it visible
5. Click "Save"

### Managing Live Chats
1. Go to Django Admin
2. Navigate to "Chat Sessions"
3. Click on any session to view conversation
4. See user name, email, and full message history
5. To respond:
   - Scroll to "Reply to User" section
   - Type your message in the text box
   - Click "Save"
   - User receives it within 3 seconds

### Viewing Chat History
1. Go to "Chat Sessions" in admin
2. View all conversations with user names
3. Filter by active/inactive status
4. Search by session ID, name, or email
5. See message count for each session

## How It Works

1. Visitor clicks the green chat button
2. Enters their name (and optionally email)
3. Chat opens with FAQ suggestions
4. As they type, FAQs filter to show relevant questions
5. They can click FAQ for instant answer or type custom message
6. FAQ suggestions remain visible throughout conversation
7. Admin can view and respond from admin panel
8. Messages update automatically every 3 seconds

## Smart FAQ Filtering

- FAQs are always visible below the chat messages
- As user types, FAQs filter in real-time
- Shows top 3 most relevant questions
- Matches based on question text
- Helps users find answers faster
- Reduces need for custom messages

## Customization

### Change Colors
Edit `frontend/components/Chatbot.tsx`:
- Button: `from-green-500 to-emerald-600`
- User messages: `bg-green-500`
- Bot messages: `bg-white`
- Admin messages: `bg-blue-500`

### Change Number of Suggestions
In `Chatbot.tsx`, find:
```typescript
{filteredFAQs.slice(0, 3).map((faq) => (
  // Change 3 to desired number
```

### Change Polling Interval
In `Chatbot.tsx`, find:
```typescript
const interval = setInterval(() => {
  fetchMessages()
}, 3000) // Change 3000 to desired milliseconds
```

## Tips

- Keep FAQ answers concise and helpful
- Use order field to prioritize important questions
- Monitor chat sessions regularly for live support
- FAQ filtering helps users self-serve
- User names make conversations personal
- Consider adding more FAQs based on common questions
