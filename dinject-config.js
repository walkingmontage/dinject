var di_config = {
    beans: [
      {
		    name: 'Speak'
		}
		,{	
		    name: 'Walk'
		}
		,{
		    name: 'Fly'
		}
		,{
		    name: 'Person',
		    inject: [{
		        need: 'Speak',
		        prop: 'speak'
		    }, {
		        need: 'Walk',
		        prop: 'walk'
		    }]
		}
		, {
		    name: 'Bird',
		    inject: [{
		        need: 'Fly',
		        prop: 'fly'
		    }, {
		        need: 'Walk',
		        prop: 'walk'
		    }]
		}
    ],
    libs:[
    	{
    		name:'humanBehavior',
    		path:'human.js'
    	}
    ]
}
