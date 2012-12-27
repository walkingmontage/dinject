#dinject.js
=======
#####Dependency injection in javascript.
=======
>dinject is a light weight javascript dependency injection framework that allows javascript developers can removing hard-coded dependencies and making it possible to change them, whether at run-time or compile-time

####Like the Spring framework in java,you can use DI in javascript with a simple config as follows
<pre><code>
var di_config = {
    beans: [
    {
		    name: 'Speak',
		    from: 'humanBehavior'
		}
		,{	
		    name: 'Walk'
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
		}],
    libs:[
    	{
    		name:'humanBehavior',
    		path:'human.js'
    	}
    ]
}
</code></pre>

Then you can use like this:
<pre><code>
di.create(People);
</code></pre>

dinject will fill the speak and walk property with new instance or the instance from pool then return a Person instance to you.
<br/>
Also dinject provide a simple way to load js at runtime.
<pre>
<code>
using('humanBehavior',function(){
  //do something when the js file loaded.
});
</code>
</pre>
