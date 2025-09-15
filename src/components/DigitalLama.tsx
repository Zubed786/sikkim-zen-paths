import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const DigitalLama = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const predefinedQA = [
    {
      question: "When are the major Buddhist festivals?",
      answer: "Major festivals include Losar (Tibetan New Year) in February/March, Buddha Purnima in May, and Drupka Teshi in July. Each monastery also celebrates its own annual festivals."
    },
    {
      question: "What's the best time to visit Sikkim monasteries?",
      answer: "October to December and March to June are ideal. Weather is clear with good mountain views. Avoid monsoon season (June-September) due to heavy rainfall."
    },
    {
      question: "How can I make donations to monasteries?",
      answer: "You can donate through our secure donation portal. Choose specific monasteries or general monastery preservation. Minimum donation is ₹500. All donations support heritage conservation."
    },
    {
      question: "Are photography restrictions in monasteries?",
      answer: "Most monasteries allow photography in courtyards but restrict it inside prayer halls. Always ask permission from monks and respect sacred spaces. Some charge a small camera fee."
    },
    {
      question: "What should I wear when visiting?",
      answer: "Dress modestly - cover shoulders and knees. Remove hats and shoes before entering prayer halls. Avoid bright colors. Carry a light jacket as monasteries can be cool."
    }
  ];

  const handleQuestionClick = (qa: typeof predefinedQA[0]) => {
    setSelectedQuestion(`Q: ${qa.question}\n\nA: ${qa.answer}`);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-monastery shadow-elegant hover:shadow-warm transition-smooth"
          size="sm"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md h-96 flex flex-col">
            <CardHeader className="bg-gradient-monastery text-white rounded-t-lg flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-lg">🧘 Digital Lama</CardTitle>
                <p className="text-white/80 text-sm">Your monastery guide</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex-1 p-4 overflow-y-auto">
              {selectedQuestion ? (
                <div className="space-y-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <pre className="text-sm whitespace-pre-wrap">{selectedQuestion}</pre>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedQuestion('')}
                  >
                    ← Back to questions
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    Welcome! I'm here to help with monastery information. Choose a question:
                  </p>
                  
                  {predefinedQA.map((qa, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(qa)}
                      className="w-full text-left p-3 rounded-lg border border-border hover:bg-accent/5 transition-gentle text-sm"
                    >
                      {qa.question}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>

            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 border border-border rounded-lg text-sm"
                  disabled
                />
                <Button size="sm" disabled>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Currently showing predefined answers. Live chat coming soon!
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default DigitalLama;