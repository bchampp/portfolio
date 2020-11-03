import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

interface Post {
    id: string,
}

interface Tag {
    name: string,
    count: number,
}

export default class Content {
    dir: string;
    data: Array<Post>;
    files: Array<string>;

    constructor(type: string) {
        this.dir = path.join(process.cwd() + '/content', type);
        this.files = fs.readdirSync(this.dir);
    }

    getAllData(): Array<Post> {
        const files = fs.readdirSync(this.dir);
        let rawData = files.map((name): any => {
            const id = name.replace(/\.md$/, '');
            const filePath = path.join(this.dir, name);
            const fileContents = fs.readFileSync(filePath, 'utf8');

            const result = matter(fileContents);

            return {
                id,
                ...result.data,
            };
        });

        this.data = this.sort(rawData);
        return this.data;
    }

    getAllTags(): Array<any> {
        let tags: Array<any> = [];

        this.files.forEach(name => {
            const id = name.replace(/\.md$/, '');
            const fullPath = path.join(this.dir, name);
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
        })

        return tags;
    }

    getAllIds(): Array<any> {
        return this.files.map(name => {
            return {
                params: {
                    id: name.replace(/\.md$/, '').toString()
                }
            }
        });
    }

    async getData(id: string) {
        const filePath = path.join(this.dir, `${id}.md`)
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const matterResult = matter(fileContents);
    
        const processedContent = await remark().use(html).process(matterResult.content);
        const contentHtml = processedContent.toString();
    
        return {
            id,
            contentHtml,
            ...matterResult.data
        };
    }

    sort(data: Array<any>): Array<any> {
        return data;
    }
}

function removeDuplicates(array: Array<any>): Array<any> {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}

export function getAllTags(): Array<string> {
    let tags: Array<string> = [];
    const workTags = new Content('work').getAllTags() || [];
    const projectTags = new Content('projects').getAllTags() || [];
    const postTags = new Content('posts').getAllTags() || [];
    return removeDuplicates(tags.concat(workTags, projectTags, postTags));
}

export function getAllTagIds(){
    const raw_tags = getAllTags(); // [{name: 'c++', count: 5}, {}...etc.]
    
    let tagNames = [];
    raw_tags.forEach(tag => {
        tagNames.push(tag.name);
    })
    console.log(tagNames);

    let tags = tagNames.map(tag => {
        return {
            params: {
                id: tag
            }
        }
    })
    console.log(tags);
    return tags;
}