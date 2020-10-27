import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectsDir = path.join(process.cwd(), 'projects')

export function getProjectsData() {
  const fileNames = fs.readdirSync(projectsDir)

  const projects = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(projectsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // TODO: Parse Tags
    const matterResult = matter(fileContents)
    console.log(matterResult);    
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return projects.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDir)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '').toString()
      }
    }
  })
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}