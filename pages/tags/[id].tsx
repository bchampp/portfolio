import { getAllTagIds } from '../../lib/content';
import Content, { getAllTags } from '../../lib/content';
import Index from '.';

export default function Tagged({tag, work, projects, posts, tags }) {
  return (
    <Index tag={tag} tags={tags} work={work} projects={projects} posts={posts} />
  )
}

export async function getStaticPaths() {
  const paths = getAllTagIds();
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
    const query = params.id;
    const tag = query.split("&");
    const work = new Content('work').getAllData();
    const projects = new Content('projects').getAllData();
    const posts = new Content('posts').getAllData();
    const tags = getAllTags();

  return {
    props: {
      tag, 
      work,
      projects, 
      posts, 
      tags
    }
  }
}