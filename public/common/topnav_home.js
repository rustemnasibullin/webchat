limit_multiple_users = true

limit_users = true

sequence = "9x88_4"


/**********************************************************************************************
**********************************************************************************************

                              Bullet and Icon Image Library  

**********************************************************************************************
**********************************************************************************************/



/*-------------------------------------------
Bullet and Icon image library - Unlimited bullet
or icon images may be defined below and then associated
with any sub menu items within the 'Sub Menu Structure 
and Text' section of this data file.  Relative 
positioned icon images may also be associated
with any main menu item in the 'main menu items' section.
--------------------------------------------*/


    //Relative positioned icon images (flow with main menu or sub item text)

	dqm__icon_image0 = "common/bullet_top1.gif"
	dqm__icon_rollover0 = "common/bullet_top.gif"
	dqm__icon_image_wh0 = "13,8"

	dqm__2nd_icon_image0 = "common/bullet_top1.gif"
	dqm__2nd_icon_rollover0 = "common/bullet_top.gif"
	dqm__2nd_icon_image_wh0 = "13,8"
	

    //Absolute positioned icon images (coordinate positioned, sub menus only)

	dqm__2nd_icon_image0 = "common/arrow.gif"
	dqm__2nd_icon_rollover0 = "common/arrow.gif"
	dqm__2nd_icon_image_wh0 = "13,10"
	dqm__2nd_icon_image_xy0 = "0,4"





/**********************************************************************************************
**********************************************************************************************

                              Main Menu Settings  

**********************************************************************************************
**********************************************************************************************/



/*---------------------------------------------
Main Item Widths and Heights
-----------------------------------------------*/


	dqm__main_width = 80		//default main item widths
	dqm__main_height = 12			//default main item heights
	
	//dqm__main_width= 80			//specific main item widths
	//dqm__main_heightX= 90			//specific main item heights


//	dqm__main_width4 =100;

/*---------------------------------------------
Main Menu Borders Dividers and Layout
-----------------------------------------------*/


	dqm__main_horizontal = true		//align menu bar horizontally or vertically

	dqm__main_border_width = 0;		//the thickness of the border in pixels, 0 = no border
	dqm__main_border_color = "#000000"	//HEX color or set to 'transparent'


	dqm__main_use_dividers = false		//When true the item gap setting is ignored
						//and the border width and color are used to
						//separate each main menu item.
						
							
	dqm__main_item_gap = 0	//the gap between main menu items in pixels
	

	dqm__align_items_bottom_and_right = true	//align items of different size to the bottom
							//or right edge of the largest main menu item
							//depending on the horizontal or vertical layout
							//of the main menu bar - false aligns items to
							//the top and left

/*---------------------------------------------
Menu Item Background and Text Colors
-----------------------------------------------*/


	dqm__main_bgcolor = "#ffffff"		//default color for all items, HEX or 'transparent'
	dqm__main_bgcolorX = "#ffffff"		//specific menu item color, HEX or 'transparent'
	
	dqm__main_hl_bgcolor = "#ffffff"	//HEX color value or set to 'transparent'
	dqm__main_hl_bgcolorX = "#ffffff"

	dqm__main_textcolor = "#111111"
	dqm__main_textcolorX = "Blue"

	dqm__main_hl_textcolor = "#111111"
	dqm__main_hl_textcolorX = "Blue"



/*---------------------------------------------
Menu Item Font Settings
-----------------------------------------------*/


	dqm__main_fontfamily = "Courier"	//Any available system font     
	dqm__main_fontsize = -1			//Defined with pixel sizing  	
	dqm__main_textdecoration = "normal"	//set to: 'normal', or 'underline'
	dqm__main_fontweight = "normal"		//set to: 'normal', or 'bold'
	dqm__main_fontstyle = "normal"		//set to: 'normal', or 'italic' 	


	//rollover effect
	
	dqm__main_hl_textdecoration = "underline"



/*---------------------------------------------
Main Menu Margins and Text Alignment
-----------------------------------------------*/


	dqm__main_text_alignment = "center"		//set to: 'left', 'center' or 'right'
	dqm__main_margin_top = 0
	dqm__main_margin_bottom = 2
	dqm__main_margin_left = 5
	dqm__main_margin_right = 5



	//specific settings

	dqm__main_text_alignmentX = "right"		//set to: 'left', 'center' or 'right'
	dqm__main_margin_topX = 4
	dqm__main_margin_bottomX = 4



/*---------------------------------------------
Optional Status Bar Text
-----------------------------------------------*/

   
	//dqm__status_text0 = "Sample text - Main Menu Item 0"
	//dqm__status_text1 = "Sample text - Main Menu Item 1"



/*---------------------------------------------
Main Menu Items (Text, URL's, and Icons)
-----------------------------------------------*/


	
    //Main Menu 0

	dqm__maindesc0 = "home"
	dqm__micon_index0 = 0
	dqm__url0 = "javascript:showItem(HOME[0],HOME[1]);" 
	


    //Main Menu 1

	dqm__maindesc1 = "Gallery"
	dqm__micon_index1 = 0
	dqm__url1 = "/products"


    //Main Menu 2

	dqm__maindesc2 = "Library"
	dqm__micon_index2 = 0
	dqm__url2 = "/renew"



/**********************************************************************************************
**********************************************************************************************

                              Sub Menu Settings

**********************************************************************************************
**********************************************************************************************/


/*-------------------------------------------
Colors, Borders, Dividers, and more...
--------------------------------------------*/


	dqm__sub_menu_width = 130      		//default sub menu widths
	dqm__sub_xy = "0,0"            		//default sub x,y coordinates - defined relative
						//to the top-left corner of parent image or sub menu
   
	dqm__urltarget = "_self"		//default URL target: _self, _parent, _new, or "my frame name"

	dqm__border_width = 1
	dqm__divider_height = 0

	dqm__border_color = "#ffffff"		//Hex color or 'transparent'
	dqm__menu_bgcolor = "#66789D"		//Hex color or 'transparent'
	dqm__hl_bgcolor = "#66789D"		

	dqm__mouse_off_delay = 150		//defined in milliseconds (activated after mouse stops)
	dqm__nn4_mouse_off_delay = 500		//defined in milliseconds (activated after leaving sub)


/*-------------------------------------------
Font settings and margins
--------------------------------------------*/
   

    //Font settings

	dqm__textcolor = "Gold"
	dqm__fontfamily = "Verdana"		//Any available system font     
	dqm__fontsize = 10			//Defined with pixel sizing  	
	dqm__fontsize_ie4 = 9			//Defined with point sizing
	dqm__textdecoration = "normal"		//set to: 'normal', or 'underline'
	dqm__fontweight = "normal"		//set to: 'normal', or 'bold'
	dqm__fontstyle = "normal"		//set to: 'normal', or 'italic' 	


    //Rollover font settings

	dqm__hl_textcolor = "Indigo"
	dqm__hl_textdecoration = "underline"	//set to: 'normal', or 'underline'



    //Margins and text alignment

	dqm__text_alignment = "left"		//set to: 'left', 'center' or 'right'
	dqm__margin_top = 2
	dqm__margin_bottom = 3
	dqm__margin_left = 5
	dqm__margin_right = 4



/*---------------------------------------------
Optional Status Bar Text
-----------------------------------------------*/


	dqm__show_urls_statusbar = false

	//dqm__status_text1_0 = "Sample text - Main Menu Item 1, Sub Item 0"	
	//dqm__status_text1_0 = "Sample text - Main Menu Item 1, Sub Item 1"	



/*-------------------------------------------
Internet Explorer Transition Effects
--------------------------------------------*/


    //Options include - none | fade | pixelate |iris | slide | gradientwipe | checkerboard | radialwipe | randombars | randomdissolve |stretch

	dqm__sub_menu_effect = "fade"
	dqm__sub_item_effect = "fade"


    //Define the effect duration in seconds below.
   
	dqm__sub_menu_effect_duration = .4
	dqm__sub_item_effect_duration = .4


    //Specific settings for various transitions.

	dqm__effect_pixelate_maxsqare = 25
	dqm__effect_iris_irisstyle = "PLUS"		//CROSS, CIRCLE, PLUS, SQUARE, or STAR
	dqm__effect_checkerboard_squaresx = 14
	dqm__effect_checkerboard_squaresY = 14
	dqm__effect_checkerboard_direction = "RIGHT"	//UP, DOWN, LEFT, RIGHT


    //Opacity and drop shadows.

	dqm__sub_menu_opacity = 100			//1 to 100
	dqm__dropshadow_color = "none"			//Hex color value or 'none'
	dqm__dropshadow_offx = 5			//drop shadow width
	dqm__dropshadow_offy = 5			//drop shadow height



/*-------------------------------------------
Browser Bug fixes and Workarounds
--------------------------------------------*/


    //Mac offset fixes, adjust until sub menus position correctly.
   
	dqm__os9_ie5mac_offset_x = 5
	dqm__os9_ie5mac_offset_Y = 10

	dqm__osx_ie5mac_offset_x = 5
	dqm__osx_ie5mac_offset_Y = 10

	dqm__ie4mac_offset_x = -10
	dqm__ie4mac_offset_Y = -45


    //Mac offset fixes, adjust until main menu items line up correctly

	dqm__mainitems_os9_ie5mac_offset_x = 10
	dqm__mainitems_os9_ie5mac_offset_y = 15

	dqm__mainitems_osx_ie5mac_offset_x = 10
	dqm__mainitems_osx_ie5mac_offset_y = 15



    //Netscape 4 resize bug workaround.

	dqm__nn4_reaload_after_resize = true
	dqm__nn4_resize_prompt_user = false
	dqm__nn4_resize_prompt_message = "To reinitialize the navigation menu please click the 'Reload' button."
   

    //Opera 5 & 6, set to true if the menu is the only item on the HTML page.

	dqm__use_opera_div_detect_fix = true


    //Pre-defined sub menu item heights for the Espial Escape browser.

	dqm__escape_item_height = 20
	dqm__escape_item_height0_0 = 70
	dqm__escape_item_height0_1 = 70


/*---------------------------------------------
Exposed menu events
----------------------------------------------*/


    //Reference additional onload statements here.

	//dqm__onload_code = "alert('custom function - onload')"


    //The 'X' indicates the index number of the sub menu group.
    //The 'X_X' indicates the index number of the sub menu item.

	dqm__showmenu_codeX = "status = 'custom show menu function call - menu0'"
	dqm__hidemenu_codeX = "status = 'custom hide menu function call - menu0'"
//	dqm__clickitem_codeX_X = "alert('custom Function - Menu Item 0_0')"



/*---------------------------------------------
Specific Sub Menu Settings
----------------------------------------------*/


    //The following settings may be defined for specific sub menu groups.
    //The 'X' represents the index number of the sub menu group.

	dqm__border_widthX = 10;
	dqm__divider_heightX = 5;		
	dqm__border_colorX = "#0000ff";     
	dqm__menu_bgcolorX = "#66789D"
	dqm__hl_bgcolorX = "#66789D"
	dqm__hl_textcolorX = "#66789D"
	dqm__text_alignmentX = "left"


    //The following settings may be defined for specific sub menu items.
    //The 'X_X' represents the index number of the sub menu item.

	dqm__hl_subdescX_X = "custom highlight text"
	dqm__urltargetX_X = "_new"




/*---------------------------------------------
Specific Sub Menu Settings
----------------------------------------------*/
  


//Sub Menu 1

	dqm__sub_xy1 = "-69,17"
	dqm__sub_menu_width1 = 200

	dqm__subdesc1_0 = "Adventures in USA"
	dqm__subdesc1_1 = "India"
	dqm__subdesc1_2 = "Praha"
	dqm__subdesc1_3 = "RF"
	
//	dqm__clickitem_code1_0 = "alert('custom Function - Menu Item 0_0')"
	
	
	dqm__icon_index1_0 = 0
	dqm__icon_index1_1 = 0
	dqm__icon_index1_2 = 0
	dqm__icon_index1_3 = 0

	//dqm__2nd_icon_index1_0 = 0
	//dqm__2nd_icon_index1_1 = 0
	
	dqm__url1_0 = "../spki/index.html"
	dqm__url1_1 = "../ssl/index.html"
	dqm__url1_2 = "../sgc/index.html"
	dqm__url1_3 = "../codesign/index.html"

	




//Sub Menu 2

	dqm__sub_xy2 = "-69,17"
	dqm__sub_menu_width2 = 340

	dqm__subdesc2_0 = "ibsStudio Manual"
	dqm__subdesc2_1 = "Satellite Navigation Monitoring Management System"
	dqm__subdesc2_2 = "XBUS Concept."
	
	dqm__icon_index2_0 = 0
	dqm__icon_index2_1 = 0
	dqm__icon_index2_2 = 0

	dqm__url2_0 = "../spki/index.html"
	dqm__url2_1 = "../ssl/index.html"
	dqm__url2_2 = "../sgc/index.html"



   