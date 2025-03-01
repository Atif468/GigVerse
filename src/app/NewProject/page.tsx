'use client';

import React, { useState } from "react";

const NewProject = () => {
    const [formData, setFormData] = useState({
        name: "",
        by: "",
        shortDesc: "",
        description: "",
        checkpoints: [""],
        rewards: [""],
        contact: "",
    });
    
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addCheckpoint = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setFormData(prev => ({
            ...prev,
            checkpoints: [...prev.checkpoints, ""],
            rewards: [...prev.rewards, ""],
        }));
    };

    const removeCheckpoint = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault();
        setFormData(prev => ({
            ...prev,
            checkpoints: prev.checkpoints.filter((_, i) => i !== index),
            rewards: prev.rewards.filter((_, i) => i !== index),
        }));
    };

    const editCheckpoint = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newCheckpoints = [...formData.checkpoints];
        newCheckpoints[index] = e.target.value;
        setFormData(prev => ({ ...prev, checkpoints: newCheckpoints }));
    };

    const editReward = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newRewards = [...formData.rewards];
        newRewards[index] = e.target.value;
        setFormData(prev => ({ ...prev, rewards: newRewards }));
    };

    return (
        <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a New Project</h2>
            <form className="space-y-4">
                <input type="text" name="name" placeholder="Project Title" value={formData.name} onChange={onChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="text" name="by" placeholder="Your Name (for display)" value={formData.by} onChange={onChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="text" name="shortDesc" placeholder="One Line Description" value={formData.shortDesc} onChange={onChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <textarea name="description" placeholder="Full Description" value={formData.description} onChange={onChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="text" name="contact" placeholder="Contact Info" value={formData.contact} onChange={onChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                
                <h3 className="text-xl font-semibold text-gray-700 mt-4">Checkpoints</h3>
                {formData.checkpoints.map((checkpoint, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <input type="text" placeholder="Checkpoint Description" value={checkpoint} onChange={(e) => editCheckpoint(e, index)} className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <input type="number" placeholder="Reward (ETH)" min="0" step="0.000000000000000001" value={formData.rewards[index]} onChange={(e) => editReward(e, index)} className="w-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        {index !== 0 && (
                            <button onClick={(e) => removeCheckpoint(e, index)} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">X</button>
                        )}
                    </div>
                ))}
                <button onClick={addCheckpoint} className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Add Checkpoint</button>
                
                <button type="submit" disabled={submitDisabled} className={`w-full py-2 text-white rounded-md ${submitDisabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}>
                    {submitDisabled ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default NewProject;
