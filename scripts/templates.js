angular.module("su-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("button.tmpl","<button ng-class=\"type\">\n	<span ng-if=\"icon\" class=\"su-icon fa {{icon}}\"></span>\n	<span class=\"su-text\">{{value}}</span>\n</button>\n");
$templateCache.put("dropdown.tmpl","<div class=\"su-dropdown\" ng-class=\"{\'su-dn\': !visible}\">\n	<span ng-transclude></span>\n</div>\n");
$templateCache.put("grid-guidelines.tmpl","<div id=\"su-gridguide\">\n	<div class=\"su-wrap\">\n		<div class=\"su-col-edge-1\">\n			<div class=\"su-box\">\n				<div class=\"su-inner\"></div>\n			</div>\n		</div>\n		<div class=\"su-col-1\">\n			<div class=\"su-box\">\n				<div class=\"su-inner\"></div>\n			</div>\n		</div>\n		<div class=\"su-col-1\">\n			<div class=\"su-box\">\n				<div class=\"su-inner\"></div>\n			</div>\n		</div>\n		<div class=\"su-col-1\">\n			<div class=\"su-box\">\n				<div class=\"su-inner\"></div>\n			</div>\n		</div>\n		<div class=\"su-col-1\">\n			<div class=\"su-box\">\n				<div class=\"su-inner\"></div>\n			</div>\n		</div>\n		<div class=\"su-col-edge-1\">\n			<div class=\"su-box\">\n				<div class=\"su-inner\"></div>\n			</div>\n		</div>\n		<div class=\"su-left-edge\"></div>\n		<div class=\"su-right-edge\"></div>\n	</div>\n</div>\n");
$templateCache.put("popup.tmpl","<div class=\"su-popup\" ng-class=\"{\'su-dn\': !visible}\">\n	<div class=\"su-inner\">\n		<a ng-if=\"!config.noCloseButton\" class=\"su-close\" ng-click=\"close()\"><i class=\"fa fa-close\"></i></a>\n		<div ng-if=\"config.title\" class=\"su-title\"><h2>{{config.title}}</h2></div>\n		<div class=\"su-container\" ng-transclude></div>\n	</div>\n</div>\n");
$templateCache.put("snackbar.tmpl","<div class=\"su-snackbar {{config.color}} animated\"\n     ng-class=\"{\n         \'fadeInUp\'               : !config.bottom,\n         \'fadeInDown\'             : config.bottom,\n         \'fadeOutUp su-slide-up\'  : remove && !config.bottom,\n         \'fadeOutDown su-slide-up\': remove && config.bottom\n     }\">\n	<a class=\"su-close\" ng-click=\"close()\"><span class=\"fa fa-times-circle\"></span></a>\n	{{text}}\n</div>\n");}]);