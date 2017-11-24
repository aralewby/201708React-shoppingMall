import React, {Component} from 'react';
import './index.less';
import {createHashHistory} from 'history';
let history =createHashHistory();
export default class Vipcore extends Component {
    goback=()=>{
        history.goBack();
    };
    render() {
        return (
            <div className="vipcore">
                <div className="myid">


                        <span className="myimg ss">
                        <i className="iconfont icon-houtui" onClick={this.goback}></i>
                    </span>


                    <span className="myvip ss">
                        我的会员
                    </span>
                    <span className="myqy ss">
                        <p className="aaa">
                            权益说明
                        </p>

                    </span>
                </div>
                <div className="vip-header">
                    <div className="header-box">
                        <i className="header-box-log"></i>
                    </div>
                    <div className="hig">
                        <div className="hig-s">
                            <span className="hig-s-p">无成长值</span>
                            <span className="s1"></span>
                            <span className="s2"></span>
                            <span className="hig-s-p1">
                                普通会员
                            </span>
                        </div>
                    </div>

                    <p className="text">
                        先去实现一个小目标
                    </p>
                </div>

                <div className="vip-center">
                    <p className="left">积分 <em className="left-s">5</em></p>
                    <p className="right">成长值 <em className="right-s">0</em></p>
                </div>

                <div className="vip-bottom">
                    <i className="bottom-p">会员专属权益</i>
                    <div className="bottom-down">
                        <span className="list-down-ls">
                                <i className="iconfont icon-yifahuo"></i>
                                <p className="down-p">新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sousuo"></i>
                                <p className="down-p">线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-fenxiang1"></i>
                                <p className="down-p">积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-xiangji1"></i>
                                <p className="down-p">全部权益</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sousuo"></i>
                                <p className="down-p">线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-yifahuo"></i>
                                <p className="down-p">新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sousuo"></i>
                                <p className="down-p">线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-fenxiang1"></i>
                                <p className="down-p">积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-fenxiang1"></i>
                                <p className="down-p">积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-xiangji1"></i>
                                <p className="down-p">全部权益</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sousuo"></i>
                                <p className="down-p">线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-yifahuo"></i>
                                <p className="down-p">新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-fenxiang1"></i>
                                <p className="down-p">积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-xiangji1"></i>
                                <p className="down-p">全部权益</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sousuo"></i>
                                <p className="down-p">线下特惠</p>
                            </span>


                    </div>
                </div>
            </div>
        )
    }
}