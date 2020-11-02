import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDir = path.join(process.cwd(), 'work');

//TODO: Make global function pre-cache
export function getWorksData() {
	const fileNames = fs.readdirSync(projectsDir);

	let projects: Array<any>
	projects = fileNames.map((fileName): any => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(projectsDir, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const matterResult = matter(fileContents);

		return {
			id,
			...matterResult.data
		};
	});

	// TODO: Fix Sorting
	return projects.sort((a, b) => {
        if (a.dateEnd == 'present' && b.dateEnd == 'present') {
            if (a.dateStart < b.dateStart){ return 1; } else { return 0; }
        } else if (a.dateEnd == 'present') {
            return 1;
        } else if (b.dateEnd == 'present') {
            return -1;
        } else if (a.dateEnd > b.dateEnd) {
            return 1;
        } else { 
            return -1;
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

export function getAllWorkIds() {
	const fileNames = fs.readdirSync(projectsDir);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '').toString()
			}
		};
	});
}

export async function getWorkData(id) {
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
