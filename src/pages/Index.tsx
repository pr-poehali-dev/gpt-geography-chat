import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'expert',
      text: 'Здравствуйте! Я географический эксперт с доступом к картам и геолокации. Что вас интересует в мире географии?',
      timestamp: '14:30'
    }
  ]);

  const categories = [
    { name: 'Страны и столицы', icon: 'Flag', count: 195 },
    { name: 'Горы и равнины', icon: 'Mountain', count: 89 },
    { name: 'Реки и озера', icon: 'Waves', count: 156 },
    { name: 'Климат', icon: 'Cloud', count: 73 },
    { name: 'Население', icon: 'Users', count: 245 },
    { name: 'Экономика', icon: 'TrendingUp', count: 134 }
  ];

  const recentTopics = [
    'Самые высокие горы мира',
    'Климатические зоны Европы',
    'Реки Сибири',
    'Столицы Африки'
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, {
        id: chatHistory.length + 1,
        type: 'user',
        text: message,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage('');
      
      // Simulate expert response
      setTimeout(() => {
        setChatHistory(prev => [...prev, {
          id: prev.length + 1,
          type: 'expert',
          text: 'Отличный вопрос! Позвольте мне найти точную информацию и показать это на карте...',
          timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Globe" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">GeoExpert</h1>
                <p className="text-sm text-gray-600">Географический эксперт с картами</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="History" size={16} className="mr-2" />
                История
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Star" size={16} className="mr-2" />
                Избранное
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Layers" size={20} className="mr-2" />
                  Категории
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 hover:bg-blue-50"
                  >
                    <Icon name={category.icon} size={16} className="mr-3 text-blue-600" />
                    <div className="flex-1 text-left">
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-gray-500">{category.count} вопросов</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Recent Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Clock" size={20} className="mr-2" />
                  Недавние темы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentTopics.map((topic, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-sm h-auto p-2 hover:bg-blue-50"
                    >
                      <Icon name="MessageCircle" size={14} className="mr-2 text-gray-400" />
                      {topic}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Interactive Map */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Map" size={20} className="mr-2" />
                  Интерактивная карта
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-80 bg-gradient-to-br from-blue-400 to-blue-600">
                  <img 
                    src="/img/207f0593-4c9d-4a8a-a2f5-53fbd37d7504.jpg" 
                    alt="Интерактивная карта мира"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Геолокация активна</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <Button size="sm" variant="outline" className="h-8">
                        <Icon name="ZoomIn" size={14} className="mr-1" />
                        Увеличить
                      </Button>
                      <Button size="sm" variant="outline" className="h-8">
                        <Icon name="Navigation" size={14} className="mr-1" />
                        GPS
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat Interface */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Чат с экспертом
                  <Badge variant="secondary" className="ml-2">
                    <Icon name="Circle" size={8} className="mr-1 text-green-500" />
                    Онлайн
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chat History */}
                  <ScrollArea className="h-60 pr-4">
                    <div className="space-y-4">
                      {chatHistory.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.type === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <div className="text-sm">{msg.text}</div>
                            <div className={`text-xs mt-1 ${
                              msg.type === 'user' ? 'text-blue-200' : 'text-gray-500'
                            }`}>
                              {msg.timestamp}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <Separator />

                  {/* Message Input */}
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Задайте вопрос о географии..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Icon name="MapPin" size={12} className="mr-1" />
                      Показать на карте
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Icon name="BarChart" size={12} className="mr-1" />
                      Статистика
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Icon name="Camera" size={12} className="mr-1" />
                      Фото региона
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expert Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Database" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-1">База знаний</h3>
                  <p className="text-sm text-gray-600">Доступ к географическим данным и статистике</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="HelpCircle" size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-1">FAQ</h3>
                  <p className="text-sm text-gray-600">Часто задаваемые вопросы по географии</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Контакты</h3>
                  <p className="text-sm text-gray-600">Связаться с экспертной командой</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;