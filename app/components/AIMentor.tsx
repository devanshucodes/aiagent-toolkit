'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Brain, Sparkles, Bot, MessageSquare } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: string;
}

export default function AIMentor({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: userMessage,
      id: Date.now().toString() 
    }]);
    
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an AI Mentor who knows everything about AI. You're the friendly expert who makes learning fun and easy. Here's how you roll:

1. BE SUPER FRIENDLY:
   - Start conversations with "Hey buddy!" or "What's up!"
   - Ask how they're doing
   - Make them feel comfortable
   - Be their AI learning buddy

2. KNOWLEDGE LEVEL CHECK:
   - ALWAYS ask about their experience level
   - Use this format: "Would you like me to explain this as if you're:
     * A beginner (like you're 10 years old)
     * An intermediate (some AI knowledge)
     * An expert (deep technical details)"
   - Adapt your explanation based on their level
   - Make sure they understand before moving on

3. KEEP IT SIMPLE:
   - Use everyday language
   - Give real-world examples
   - Break things down step by step
   - Keep responses clear and well-spaced

4. STAY ON TOPIC:
   - Focus ONLY on AI topics
   - If asked about other topics, gently steer back to AI
   - Share cool AI facts and applications
   - Keep the conversation AI-focused

5. BE HELPFUL:
   - Start by understanding what they need
   - Give practical advice they can use
   - Share tips and tricks
   - Make learning fun

Remember:
- You're their friendly AI expert
- Always check their knowledge level
- Keep it casual but professional
- Focus only on AI topics
- Make learning enjoyable`
            },
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from OpenAI');
      }

      const assistantMessage = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: assistantMessage,
        id: (Date.now() + 1).toString()
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.',
        id: (Date.now() + 1).toString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg" />
                <Brain className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  AI Mentor
                </h2>
                <p className="text-sm text-slate-500">Your AI development guide</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Messages container */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg" />
                  <MessageSquare className="h-12 w-12 text-blue-500 relative" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">
                Start a Conversation
              </h3>
              <p className="text-slate-500 max-w-sm">
                Ask me anything about AI tools, development, or best practices. I'm here to help!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.role === 'user' ? 'ml-4' : 'mr-4'}`}>
                    <div className={`flex items-start gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                        {message.role === 'user' ? (
                          <Sparkles className="h-4 w-4 text-blue-500" />
                        ) : (
                          <Bot className="h-4 w-4 text-purple-500" />
                        )}
                      </div>
                      <div className={`p-4 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white rounded-tr-none'
                          : 'bg-slate-100 text-slate-800 rounded-tl-none'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isLoading && (
            <div className="flex items-center gap-2 text-slate-500">
              <Brain className="h-5 w-5" />
              <span>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message here..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-12 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
            <button
              onClick={handleSend}
              disabled={isLoading}
              className={`p-3 rounded-xl ${
                isLoading
                  ? 'bg-slate-100 text-slate-400'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              }`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 