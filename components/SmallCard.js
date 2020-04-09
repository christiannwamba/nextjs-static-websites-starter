import React from 'react';

export default function SmallCard({Icon, title}) {
  return (
    <a className="card-small" href={`/project/${title.split('/').join('-')}`}>
      <Icon w={153} h={163} />
      <h3>{title.split('/')[1]}</h3>
    </a>
  );
}
