<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>| لوحة التحكم |</title>
	<link href="theems/theme.css" rel="stylesheet" type="text/css" />
    <link rel="icon" type="image/png" href="../images/favicon.png" />
</head>

<body>
<form>
    <div class="outBorder">

            <table class="Maintable">
            <tr>
                <td class="MyTopNavBar">
                    <img src="images/ControlPanel.jpg" 
                    	class="imgHeader" />
                    <a href="index.php?route=home" 
                    	title="back to control panel">
                        	<h1 class="titleHeader">
                            	لوحــــة التحكــــم</h1></a>
                      <img class="logo" src="../images/logo.png" />          
                </td>
            </tr>
            <tr>
                <td>
                    <!--الجزء المتغير-->
                    <!--كود صفحة الماستر-->
                <?php
					if(isset($_GET["route"]))
					{
						$x=$_GET["route"];
						switch($x)
						{
							case "home":
								include("home.php");
								break;
						}//switch($x)
					}//if(isset($_GET["route"]))
					else
					{
						include("home.php");
					}//else
			    ?>
                </td>
            </tr>
            <tr>
                <td class="MyBottomBar">
                       <br />
                      	<a href="index.php?route=home">العـــودة للوحـــة التحــكم</a>
                      <br /><br />
                </td>
            </tr>
        </table>

    </div>
    </form>
</body>
</html>