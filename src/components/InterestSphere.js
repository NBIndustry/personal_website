import React from 'react';

const InterestSphere = ({ interests }) => {
    return (
        <div className="w-full min-h-screen bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">兴趣方向</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div 
                                className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:scale-105"
                                style={{ 
                                    background: `linear-gradient(45deg, ${interest.color}33, ${interest.color}66)`,
                                    filter: 'blur(10px)'
                                }}
                            />
                            <div 
                                className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transition-all duration-300 group-hover:border-white/40"
                                style={{ borderColor: interest.color }}
                            >
                                <div className="text-4xl mb-4">{interest.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{interest.name}</h3>
                                <p className="text-gray-300 text-sm">{interest.description}</p>
                                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-300 group-hover:h-2"
                                    style={{ backgroundColor: interest.color }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterestSphere; 