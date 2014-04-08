Ext.define('CM.support.components.UnboundedPager',{
    extend: 'Ext.toolbar.Paging',
    alias: 'widget.unboundedpager',

    entityText: '',

    initComponent:function(){
        this.displayInfo= true;
        this.beforePageText= 'Страница';
        this.afterPageText= '';
        this.displayMsg= this.entityText+' {0} - {1}';

        this.callParent(arguments);

        this.getComponent('last').hide();
    },

    // @private
    getPageData : function(){
        var store = this.store,
            totalCount = store.getTotalCount(),
            fromRecord = ((store.currentPage - 1) * store.pageSize) + 1,
            count = store.getCount(),
            toRecord;

        if(count < store.pageSize){
            totalCount = fromRecord+count-1;
            toRecord = totalCount;
        }else{
            totalCount = fromRecord+store.pageSize;
            toRecord = Math.min(store.currentPage * store.pageSize, totalCount);
        }

        return {
            total : totalCount,
            currentPage : store.currentPage,
            pageCount: Math.ceil(totalCount / store.pageSize),
            fromRecord: fromRecord,
            toRecord: toRecord
        };
    }

});
