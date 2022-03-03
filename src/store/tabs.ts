/**
 * tabs
 */
export default {
    state: {
        tabsList:[],   // tabs 列表
    },
    mutations: {
		/**
		 * add tabs
		*/
        addTabs:function(state:any,agrs:any){
            //去重
            if( state.tabsList.filter((o:any)=>o.id==agrs.id).length ) return

            state.tabsList=state.tabsList.concat([agrs])
		},  
		/**
		 * remove tabs
		*/           
        removeTabs:function(state:any,agrs:any){
            state.tabsList=state.tabsList.filter((o:any,i:any)=>agrs!=i);
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