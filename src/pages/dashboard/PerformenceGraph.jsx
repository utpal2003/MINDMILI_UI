import { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend 
} from 'recharts';

export default function PerformenceGraph() {
  const [data, setData] = useState([]);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    startAnimation();
  }, []);
  
  const startAnimation = () => {
    setAnimationComplete(false);
    
    const initialData = [
      { day: 'Day 1', accuracy: 0 },
      { day: 'Day 2', accuracy: 0 },
      { day: 'Day 3', accuracy: 0 },
      { day: 'Day 4', accuracy: 0 },
      { day: 'Day 5', accuracy: 0 },
      { day: 'Day 6', accuracy: 0 },
      { day: 'Day 7', accuracy: 0 }
    ];
    
    setData(initialData);
    const targetValues = [10, 22, 60, 25, 30, 55, 85];
    let currentDay = 0;
    
    const animateNextDay = () => {
      if (currentDay < 7) {
        setData(current => {
          const newData = [...current];
          newData[currentDay] = {
            ...newData[currentDay],
            accuracy: targetValues[currentDay]
          };
          return newData;
        });
        
        currentDay++;
        setTimeout(animateNextDay, 700);
      } else {
        setAnimationComplete(true);
      }
    };
    setTimeout(animateNextDay, 500);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* --- Chart ---  */}
      <div className="h-96 bg-gray-50 p-4 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="day" 
              tickLine={true}
              axisLine={true}
              tick={{fill: '#666'}}
            />
            <YAxis 
              domain={[0, 100]} 
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tickLine={true}
              axisLine={true}
              tick={{fill: '#666'}}
              label={{ value: '', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip formatter={(value) => [`${value}%`, 'Accuracy']} />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="accuracy" 
              name="Accuracy Growth (%)" 
              stroke="#6366f1" 
              fill="#a5b4fc" 
              fillOpacity={0.6}
              strokeWidth={2}
              dot={{ r: 4, fill: '#6366f1', stroke: '#6366f1', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}