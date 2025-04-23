import React from 'react';

const InterestSphere = ({ interests }) => {
    return (
        <div className="w-full min-h-screen bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">兴趣方向</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="card bg-gray-800 p-4 rounded-lg"
                            style={{
                                animation: `slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards ${index * 0.1}s`
                            }}
                        >
                            <h4 className="text-white font-medium mb-3 flex items-center">
                                <span className="text-2xl mr-2">{interest.icon}</span>
                                {interest.name}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {interest.description.split('、').map((item, i) => (
                                    <span 
                                        key={i} 
                                        className="px-2 py-1 rounded text-sm" 
                                        style={{ 
                                            backgroundColor: `${interest.color}33`,
                                            color: `${interest.color}` 
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes slideInFromLeft {
                    0% {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .card {
                    background: rgba(38, 38, 38, 0.5);
                    border: 1px solid rgba(75, 85, 99, 0.2);
                    border-radius: 1rem;
                    padding: 1.5rem;
                    backdrop-filter: blur(12px);
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateX(-100%);
                }
                
                .card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(75, 85, 99, 0.4);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }
                
                .card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.05),
                        transparent
                    );
                    transition: 0.5s;
                }
                
                .card:hover::before {
                    left: 100%;
                }
            `}</style>
        </div>
    );
};

export default InterestSphere; 