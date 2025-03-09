export class openTab {
    constructor() { }

    public linkedin = 'https://in.linkedin.com/in/krishna-sonune-1421b21b5';
    public facebook = 'https://www.facebook.com/krishnasonune1999';
    public instagram = 'https://www.instagram.com/krishna_sonune/';
    public gmail = 'mailto:krishnasonune87@gmail.com';
    public github = 'https://github.com/krishnasonune';
    public more_projects = 'https://github.com/krishnasonune?tab=repositories';
    public star_me = 'https://github.com/krishnasonune/portfolio';
    public youtube = 'https://youtube.com/@coderecursively9022';
    public resume = "https://drive.google.com/file/d/1jxe2bCgRCM9zL57zKsZgyKQcev_maWqf/view?usp=sharing";
    public leetcode: string = "https://leetcode.com/krishnasonune87/";
    public hackerrank: string = "https://www.hackerrank.com/krishnasonune87";
    public blogs: string = "https://greedygyaani.blogspot.com/";
    public medium: string = "https://medium.com/@krishnasonune87";
    public stackoverflow: string = "https://stackoverflow.com/users/17624910/krishna-sonune";

    openNewTab(url: string | undefined) {
        window.open(url);
    }
}
