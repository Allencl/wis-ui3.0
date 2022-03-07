import router from '@/router'
import { cloneDeep } from 'lodash'


/**
 * tabs
 */
export default {
    state: {
        activeKey:0,   // 选中
        tabsList:[],   // tabs 列表
    },
    mutations: {
		/**
		 * add tabs
		*/
        addTabs:function(state:any,agrs:any){

            //去重
            if( !state.tabsList.filter((o:any)=>o.path==agrs.path).length ) {
                state.tabsList=state.tabsList.concat([agrs])
                state.activeKey=state.tabsList["length"]-1
            }else{
                state.tabsList.map((o:any,i:number)=>{
                    if(o.path==agrs.path) state.activeKey=i
                })
            }


            // router.push(agrs.path)
            // try {
            //     // !sessionStorage.getItem("_tabsList") && sessionStorage.setItem("_tabsList",JSON.stringify([{a:1}]))
               
            //     // const aa=sessionStorage.getItem("_tabsList")||"[]"
            //     // const _tabsList=JSON.parse(sessionStorage.getItem("_tabsList")||"[]")
            //     // const _list=_tabsList.filter((o:any)=>o.path!=agrs.path)
            //     // console.log(    _list )
 
            //     // console.log(    agrs )

                
            // } catch (error) {
            //     console.error(error)
            // }


		},  
		/**
		 * remove tabs
		*/           
        removeTabs:function(state:any,agrs:any){
            state.tabsList=state.tabsList.filter((o:any,i:any)=>agrs!=i);

            // home | other
            if(!state.tabsList["length"]){
                router.push('/')
            }else{
                const {length,last=length-1}=state.tabsList;
                router.push( state.tabsList[last]["path"])
                state.activeKey=last
            }
		},            
    },
    actions: {
        addTabs:function(context:any,agrs:any) {
            context.commit('addTabs',agrs)
        },
        removeTabs(context:any,agrs:any) {
            context.commit('removeTabs',agrs)
        },
    }
}