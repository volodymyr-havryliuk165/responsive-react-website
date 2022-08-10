import React from 'react';
import './Footer.css';
import List from '../list/List';
import LinksList from '../list/LinksList';

function Footer() {
  const social = [
    { id: 1, name: 'twitter', to: '/' },
    { id: 2, name: 'instagram', to: '/' },
    { id: 3, name: 'telegram', to: '/' },
  ];
  const help = [
    { id: 1, name: '+380xxxx', to: 'help' },
    { id: 2, name: 'FAQ', to: 'faq' },
  ];
  return (
    <footer className="footer">
      <LinksList list={social} title='Social'/>
      <LinksList list={help} title='Help'/>
    </footer>
  );
}

export default Footer;
