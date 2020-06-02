import {observable, action} from 'mobx';
import {message} from "antd";
import {Uploader} from "../mod";


class HistoryStores {
    @observable list = [];
    @observable isLoading = false;
    @observable hasMore = true;
    @observable page = 0;
    limit = 10;

    @action append(newList){
        this.isLoading = true;
        this.list = this.list.concat(newList)
    }
    @action find(){
        Uploader.find({page:this.page, limit:this.limit})
            .then(newList => {
                this.append(newList);
                this.page++
                if (newList.length < this.limit){
                    this.hasMore = false;
                }
            })
            .catch(error =>
                message.error('加载失败')
            )
            .finally(() => {
                this.isLoading = false
            })
    }
    @action again(){
    this.list = [];
    this.isLoading = false;
    this.hasMore = true;
    this.page = 0;
    }
}



export default new HistoryStores()