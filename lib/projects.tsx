import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDir = path.join(process.cwd(), 'projects');

//TODO: Make global function pre-cache
export function getProjectsData() {
	const fileNames = fs.readdirSync(projectsDir);

	const projects = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(projectsDir, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const matterResult = matter(fileContents);

		return {
			id,
			...matterResult.data
		};
	});

	// Sort posts by date
	return projects.sort((a, b) => {
	  if (a.date < b.date) {
	    return 1
	  } else {
	    return -1
	  }
	})
}

export function getAllProjectTags() {
	const tags = [];
	const fileNames = fs.readdirSync(projectsDir);

	fileNames.forEach((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(projectsDir, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const matterResult = matter(fileContents);

		let exists = false;
		if (matterResult.data.tags) {
			matterResult.data.tags.forEach(name => {
				for (var i = 0; i < tags.length; i++) {
					if (tags[i].name == name) {
						tags[i].count += 1;
						exists = true;
					}
				}
				if (!exists) {
					tags.push({
						name, 
						count: 1
					});
				}
			});
		}
	});

	// Sort descending order
	return tags.sort((a, b) => b.count - a.count);
}

export function getAllProjectIds() {
	const fileNames = fs.readdirSync(projectsDir);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '').toString()
			}
		};
	});
}

export async function getProjectData(id) {
	const fullPath = path.join(projectsDir, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const matterResult = matter(fileContents);

	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		id,
		contentHtml,
		...matterResult.data
	};
}
