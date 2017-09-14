import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    innerHeight: Number = window.screen.availHeight;
    innerWidth: Number = window.screen.availWidth;
    mainDatas: Object;
    publicObj: Object;
    recruitmentObj: Object;


    mainData: Object = {
        'status': '0/1',
        'message': 'message',
        'data': {
            // 大图像
            'image': '../assets/big.png',
            // 公告信息
            'public': [
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'http://www.baidu.com',
                    'time': '09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '09-10'
                }
            ],
            // 招聘日历
            'calendar': {
                // 这tm就先空着吧，这个应该是最难的再商量怎么弄
            },
            // 招聘会
            'recruitment': [
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '2017-09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '2017-09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '2017-09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '2017-09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '2017-09-10'
                },
                {
                    'title': 'IBM公司前来天津大学展开招聘会',
                    'link': 'www.baidu.com',
                    'time': '2017-09-10'
                }
            ],
            // 广告
            'advertisement': [
                {
                    'src': '../assets/advertisement1.png',
                    'link': 'www.baidu.com'
                },
                {
                    'src': '../assets/advertisement2.png',
                    'link': 'www.taobao.com'
                }
            ]
    　　}
    }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        const self = this;
        // this.dataService.fetchData().subscribe(function(data) {
        //     self.mainDatas = data;
        // })
    }

    getpublic(): void {
        this.publicObj = this.mainDatas;
    }

    getwork(): void {
        this.publicObj = this.mainDatas;
    }

    getrecruitment(): void {
        this.recruitmentObj = this.mainDatas;
    }

    getrecruitmentinfo(): void {
        this.recruitmentObj = this.mainDatas;
    }

}
