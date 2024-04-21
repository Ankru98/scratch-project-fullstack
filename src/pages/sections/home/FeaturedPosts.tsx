import React from "react";
import { Typography, Stack, Container, Grid, Button, Box } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import ReactMarkdown from 'react-markdown';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// --------------------------------------------------------------------------------
// Blog section of the home page. This is the second thing that the user sees when they visit the home page. Show gallery of most recent blog posts.

// Blog posts array for the start 
const posts = [
    '# Post 1\nHier ist der erste Blog-Post.',
    '# Post 2\nInhalt für den zweiten Blog-Post.',
    '# Post 3\nUnd hier ist der dritte Blog-Post.'
  ];


export default function FeaturedPosts() {
    return (
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      {posts.map((postContent, index) => (
        <div key={index}>
          <ReactMarkdown>{postContent}</ReactMarkdown>
        </div>
      ))}
    </Carousel>
  );
}