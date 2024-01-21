import React from 'react';
import '../app/globals.css';
import {massagedOutput} from '../app/util/music';


const Music = () => {
  return (
    <div className="mx-24 bg-zinc-500 p-4 grid grid-cols-2 gap-4">
      {massagedOutput.map((item) => (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4" key={item.id}>
          <div className="card">
            <p className="card-title text-lg font-bold">Title: {item.title}</p>
            <p className="card-text text-gray-600">Artist: {item.artist}</p>
            <p className="card-text text-gray-600">Year: {item.year}</p>
            {item.label && <p className="card-text text-gray-600">Label: {item.label}</p>}
            {item.format && <p className="card-text text-gray-600">Format: {item.format}</p>}
            <p className="card-text text-gray-600">Role: {item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;