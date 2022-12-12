import React from 'react';

export default function SkillCard({ title, content }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <br />
      <div className="card-content">{content}</div>
    </div>
  );
}
