/*!
 * dinject JavaScript Library v1.0
 *
 * Released under the GPL license
 * http://www.gnu.org/licenses/gpl.html
 *
 * Date: Thu Dec 27 2012 17:47:40 GMT+0800 (CST)
 */
(function (window) {
    var dinject = {
        config: null,
        pool: null,
        libs:null,
        init: function (_config) {
            this.updateConfig(_config);
            this.pool = [];
            this.libs=_config.libs;
            return this;
        },
        updateConfig: function (_config) {
            if (!_config) {
                return;
            }
            this.config = _config;
        },
        cleanPool: function () {
            this.pool = [];
        },
        create: function (_class) {
            var it = this;
            if(typeof _class==='string'){
              _class=eval(_class);
            }
            /* iterate pool */
            for (var i = 0; i < it.pool.length; i++) {

                /* if the instance contains in the pool */
                if (it.pool[i] instanceof _class) {
                    return it.pool[i];
                }
            }

            var instance = new _class();
            it.pool.push(instance);

            /* if there is nothing to inject */
            var beanConfig = it.getBeanConfig(_class.name);
            if (!beanConfig.hasOwnProperty('inject')) {
                return instance;
            }

            var c = beanConfig.inject;

            /* dependency inject */
            for (var j = 0; j < c.length; j++) {

                /* generate : instance.prop=it.create(need) */
                eval('instance.' + c[j].prop + '= it.create(' + c[j].need + ')');
            }
            return instance;
        },
        getBeanConfig: function (className) {
            var beans = this.config.beans;
            for (var i = 0; i < beans.length; i++) {
                if (beans[i].name === className) {
                    return beans[i];
                }
            }
        },
        libTool:function(_libName,_di,_callback){
	    	this.libName=_libName;
	    	this.loading=true;
	    	this.callback=_callback;
	    	this._di=_di;
	    	this.waiter=null;
	    	this.get=function(cfg){
	    		if(!cfg){
	    			var cfg=this.getLibConfig(this.libName);
	    		}

	    		/* wait for loading complete */
	    		if(cfg.hasOwnProperty('isloading')&&cfg.isloading===false){
	    			clearTimeout(this.waiter);
	    			this.callback();
	    			return;
	    		}

	    		/* append a script in head */
	    		var s=document.createElement('script');
	    		s.src=cfg.path;
	    		s.type="text/javascript";
	    		cfg.isloading=true;
	    		document.getElementsByTagName('head')[0].appendChild(s);
	    		s.that=this;
	    		s.onload = s.onreadystatechange = function(){
	    			cfg.isloading=false;
		    		this.that.waiter=setTimeout(this.that.get(cfg),0);
	    		}
	    	}
	    	this.getLibConfig=function(name){
	    		var lbs=this._di.libs;
	    		for(var i=0;i<lbs.length;i++){
	    			if(lbs[i].name===name){
	    				return lbs[i];
	    			}
	    		}
	    		return null;
	    	}
    	},
    	using:function(_libName,_callback){
    		new this.libTool(_libName,this,_callback).get();
    	}

    }
    window.di=dinject;
    dinject.init(di_config||null);
})(window);
