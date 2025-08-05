import React, { useState } from 'react';

const Profile = () => {
  const [profile] = useState({ name: 'Sanjay Rawat', bio: 'Aspiring Full Stack Developer' });

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
      </div>
    </div>
  );
};

export default Profile;