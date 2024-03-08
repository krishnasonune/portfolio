export class openTab {
    constructor() { }

    linkedin = 'https://in.linkedin.com/in/krishna-sonune-1421b21b5';
    facebook = 'https://www.facebook.com/krishnasonune1999';
    instagram = 'https://www.instagram.com/krishna_sonune/';
    gmail = 'mailto:krishnasonune87@gmail.com';
    github = 'https://github.com/krishnasonune';
    more_projects = 'https://github.com/krishnasonune?tab=repositories';
    star_me = 'https://github.com/krishnasonune/portfolio';
    youtube = 'https://youtube.com/@coderecursively9022';
    resume = "https://drive.google.com/file/d/1jxe2bCgRCM9zL57zKsZgyKQcev_maWqf/view?usp=sharing";
    leetcode: string = "https://leetcode.com/krishnasonune87/";
    hackerrank: string = "https://www.hackerrank.com/krishnasonune87";
    blogs: string = "https://greedygyaani.blogspot.com/";

    openNewTab(url: string | undefined) {
        window.open(url);
    }
}
