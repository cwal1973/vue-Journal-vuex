export default {
    name:'daybook',
    component:() => import(/**/ '@/modules/daybook/layouts/DaybookLayout.vue') ,
    children:[
        {
            path: '',
            name: 'daybook-no-entry',
            component:() => import(/**/ '@/modules/daybook/views/NoEntrySelected.vue')  
            
        },
        {
            path: ':id',
            name: 'daybook-entry',
            component:() => import(/**/ '@/modules/daybook/views/EntryView.vue')  ,
            props:( route ) =>{
                return {
                    id: route.params.id
                }

            }

        }
    ]

}
