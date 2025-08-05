import React, { useState } from 'react';

const CommentBox = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onCommentSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        placeholder="Leave a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-1 mt-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CommentBox;