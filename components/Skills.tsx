'use client';

import React from 'react';

const skills = [
  'Kotlin', 'Java', 'Python', 'R', 'PHP', 'JavaScript', 'TypeScript',
  'Angular', 'React', 'React Native (Expo)', 'Symfony', 'Node.js', 'Django', 'Flask',
  'Firebase (Firestore, Realtime DB)', 'SQL', 'MySQL', 'Oracle', 'PostgreSQL',
  'Git', 'GitHub', 'Linux', 'Windows', 'HTML', 'CSS', 'XAMPP',
  'Google Cloud Platform (Functions, Firestore, Auth)', 'AWS', 'Docker',
  'REST', 'SOAP', 'Scrum', 'Agile', 'Jira',
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto p-6">
      <h3 className="text-4xl font-bold mb-6 text-teal-600">Habilidades Técnicas</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
        {skills.map((skill, i) => (
          <li key={i} className="bg-teal-100 dark:bg-teal-900 rounded-md p-2 text-center font-medium">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
