import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

function Project(
  id, 
  createdAt,
  completedAt,
  dueDate,
  title,
  progress,
  progressStatement,
  shortDescription,
  longDescription,
  thumbPic,
  githubLink,
  liveSiteLink,
  tools,
  features,
  featured,
  tags
) {

  this.id = id;
  this.createdAt = createdAt;
  this.completedAt = completedAt;
  this.dueDate = dueDate;
  this.title = title;
  this.progress = progress;
  this.progressStatement = progressStatement;
  this.shortDescription = shortDescription;
  this.longDescription = longDescription;
  this.thumbPic = thumbPic;
  this.githubLink = githubLink;
  this.liveSiteLink = liveSiteLink;
  this.tools = tools;
  this.features = features;
  this.featured = featured;
  this.tags = tags;

  return this;
}

const wokkiti = new Project(
  uuidv4,
  moment().subtract(10,'days'),
  moment().subtract(5, 'days'),
  moment().subtract(4, 'days'),
  'Wokkiti',
  '100%',
  'Now completed',
  'South East Asian cooking application',
  'A collection of recipes from our 2019/2020 trip back to Mahasarakham Thailand',
  "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-thumb.jpg",
  null,
  null,
  ['ReactJS', 'MongoDB'],
  ['feature1', 'feature2'],
  true,
  ['Javascript']
)

const theWebHermits = new Project(
  uuidv4,
  moment().subtract(7,'days'),
  moment().subtract(3, 'days'),
  moment().subtract(1, 'days'),
  'The Web Hermits',
  '100%',
  'Completed ahead of schedule',
  'The main site',
  'This is our site for detailing our work and blogs and things like that. ',
  "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-thumb.jpg",
  null,
  null,
  ['ReactJS', 'MongoDB'],
  ['feature1', 'feature2'],
  false,
  ['Javascript']
)



const number1 = {
  id: uuidv4(),
  article: 'Article number 1 content',
  author: 1,
  bannerPic:  "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-banner.jpg",
  createdAt: moment().subtract(15, 'days'),
  featured: false,
  shortDescription: 'A basic reactjs app',
  tags: ['reactjs', 'nodejs'],
  thumbPic: "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-thumb.jpg",
  title: "Indecision - Study Note"

}

const number2 = {
  id: uuidv4(),
  article: 'Second Article',
  author: 1,
  bannerPic:  "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-banner.jpg",
  createdAt: moment().subtract(7, 'days'),
  featured: false,
  shortDescription: 'Part 2 of reactjs app',
  tags: ['javascript', 'nodejs'],
  thumbPic: "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-thumb.jpg",
  title: "Indecision - Study Note Part 2"

}

const number3 = {
  id: uuidv4(),
  article: 'Third Article',
  author: 1,
  bannerPic:  "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-banner.jpg",
  createdAt: moment().subtract(4,'days'),
  featured: false,
  shortDescription: 'Part 3 of reactjs app',
  tags: ['CSS', 'javascript'],
  thumbPic: "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-thumb.jpg",
  title: "Indecision - Study Note Part 3"

}

const number4 = {
  id: uuidv4(),
  article: 'Fourth Article',
  author: 1,
  bannerPic:  "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-banner.jpg",
  createdAt: moment().subtract(2, 'days'),
  featured: false,
  shortDescription: 'Part 4 of reactjs app',
  tags: ['reactjs', 'javascript'],
  thumbPic: "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-thumb.jpg",
  title: "Indecision - Study Note Part 4"

}

const number5 = {
  id: uuidv4(),
  article: 'CSS Article',
  author: 1,
  bannerPic:  "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-banner.jpg",
  createdAt: moment().subtract(8, 'days'),
  featured: false,
  shortDescription: 'CSS Stuff',
  tags: ['CSS'],
  thumbPic: "https://dmvie1.s3.us-east-2.amazonaws.com/learnings/indecision-thumb.jpg",
  title: "CSS Stuff"

}

const articleList = [number1, number2, number3, number4, number5];
const projectsList = [wokkiti, theWebHermits];


localStorage.setItem('projects', JSON.stringify(projectsList))
localStorage.setItem('articles', JSON.stringify(articleList))