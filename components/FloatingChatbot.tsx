"use client";

import { useState, FormEvent, useRef, useEffect } from 'react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?' }
  ]);

  // Función para hacer scroll automático hacia abajo cuando llega un mensaje nuevo
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulación de respuesta (Pronto lo conectaremos a n8n)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { role: 'bot', text: 'Estoy procesando tu solicitud... (Esta es una respuesta de prueba).' }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* --- Ventana del Chat --- */}
      <div className={`
          transition-all duration-300 ease-in-out transform
          ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}
          bg-white w-[380px] h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-gray-100
        `}>
          
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-violet-600 to-blue-500 p-5 text-white flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            {/* Avatar del Bot en el header */}
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path d="M16.5 7.5h-9v9h9v-9z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v2h1.5v1.5h2V9H16V7.5h-3.5V7zm-1 5.5h-1.5v2h1.5v1.5h2v-1.5H15V14h-1.5v-1.5z"/>
               </svg>
            </div>
            <div>
               <h3 className="font-bold text-lg leading-tight">Asistente IA</h3>
               <p className="text-xs text-blue-100 opacity-80">En línea ahora</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Área de mensajes */}
        <div className="flex-1 p-5 overflow-y-auto bg-gray-50 flex flex-col gap-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {/* Avatar del BOT (solo si el mensaje es del bot) */}
              {msg.role === 'bot' && (
                <div className="w-8 h-8 bg-violet-100 rounded-full flex-shrink-0 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4 4 4zm1.5-5.5h-3v3h3v-3z" opacity=".3"/><path d="M13.5 10.5h-3v3h3v-3z"/>
                   </svg>
                </div>
              )}

              {/* Burbuja del mensaje */}
              <div 
                className={`max-w-[80%] p-4 rounded-2xl text-[15px] shadow-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-violet-600 to-blue-500 text-white rounded-br-none' 
                    : 'bg-white text-gray-700 rounded-bl-none border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {/* Referencia invisible para el auto-scroll */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input moderno */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 p-3 pl-5 bg-gray-100 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
          />
          <button 
            type="submit"
            disabled={!input.trim()}
            className={`p-3 rounded-full flex items-center justify-center transition-all ${
              input.trim() 
                ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-md hover:scale-105' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transform rotate-90">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>

      {/* --- Botón Flotante con efecto "Pulse" --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300
          ${isOpen ? 'bg-gray-700 rotate-90 scale-90' : 'bg-gradient-to-r from-violet-600 to-blue-500 hover:scale-110 animate-pulse-slow'}
        `}
      >
        {isOpen ? (
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
             <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
           </svg>
        ) : (
           // Ícono de Chat
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
             <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.562 2.632 6.19l-2.047 2.047a.75.75 0 001.06 1.06l1.959-1.959a.75.75 0 00-.106-1.06zM12 19.5c-4.476 0-8.25-3.375-8.25-7.5S7.524 4.5 12 4.5s8.25 3.375 8.25 7.5-3.774 7.5-8.25 7.5z" clipRule="evenodd" />
             <path d="M12 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5z" opacity=".6" />
           </svg>
        )}
      </button>
    </div>
  );
}