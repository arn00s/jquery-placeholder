/*
 * jQuery placeholder Plugin
 * version: 0.1 (2010-10-28)
 * @requires jQuery v1.4.3 or later
 *
 * Examples and documentation at: COMING SOON
 *
 *
 * TODO :
	-
 */
(function($)
{
	$.fn.extend({
        placeholder: function(options){
        
		var defaults = {  
			color: '#b4b4b4',
			defaultColor: '',
			cssclass: 'placeholder'
		};
		
		var options = $.extend(defaults, options);

    	//check browser support
		if(!('placeholder' in document.createElement('input')))
		{
			$(this).find('input[placeholder]').each(
				function()
				{
					options.defaultColor = $(this).css('color');
					
					var placeholder = $(this).attr('placeholder');
					
					var value = $(this).val();
					
					if(value == '')
					{
						$(this).css({color: options.color}).val(placeholder).addClass(options.cssclass);
					}
					
					$(this).focus(function()
					{
						if( $(this).val() == '' || $(this).val() == placeholder )
						{
							$(this).css({color : options.defaultColor}).val('').removeClass(options.cssclass);
						}
					});
					$(this).blur(function()
					{
						if( $(this).val() == '')
						{
							$(this).css({color: options.color}).val(placeholder).addClass(options.cssclass);
						}
					});
				}
			);
			
			$(this).bind('submit', function(){
				$(this).find('.'+options.cssclass).val('');
			});
			
		}
		else { return false; }
        }
    });
})(jQuery);