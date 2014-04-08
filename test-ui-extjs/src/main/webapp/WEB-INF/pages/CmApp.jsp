<%@ page import="com.nsl.cm.auth.PrincipalDetails" %>
<%@ page import="com.nsl.cm.auth.PrincipalProviderHelper" %>
<%@ page import="com.nsl.cm.auth.CmPermissions" %>
<%@ page import="org.springframework.web.context.WebApplicationContext" %>
<%@ page import="org.springframework.web.context.support.WebApplicationContextUtils" %>
<%@ page import="java.util.Collection" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>CM (версия ${properties['app.version']})</title>
    <link rel="stylesheet" type="text/css" href="resources/extjs/resources/css/ext-all.css"/>
    <link rel="stylesheet" type="text/css" href="resources/CmApp/style.css"/>
    <script type="text/javascript" src="resources/extjs/ext-all-dev.js"></script>
    <script type="text/javascript" src="resources/extjs/locale/ext-lang-ru.js"></script>
    <script type="text/javascript" src="resources/CmApp/Config.js"></script>
    <script type="text/javascript" src="resources/CmApp/auth/Permissions.js"></script>
    <script type="text/javascript" src="resources/CmApp/auth/User.js"></script>
    <script type="text/javascript">
        <%
        PrincipalDetails user=null;
            if (request.getUserPrincipal()!=null){
            WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(application);
            PrincipalProviderHelper principalProviderHelper = (PrincipalProviderHelper)context.getBean("principalProvider");
            user = principalProviderHelper.getPrincipal(request.getUserPrincipal().getName());
            }
        %>
        Ext.override(Config, {
            dateFormat: '${properties['app.config.dateFormat']}',
            timestampFormat: '${properties['app.config.timestampFormat']}',
            dateUnlimited: new Date('${properties['app.config.dateUnlimited']}'),
            restAdminBaseUrl: '${properties['app.rest.baseUrl']}',
            user: <% if (user!=null) {%>Ext.create('CM.auth.User', {
                login: '<%=user.getId()%>',
                name: '<%=user.getName()%>',
                surname: '<%=user.getSurname()%>',
                patronymic: '<%=user.getPatronym()%>',
                roles: ['<%=user.getId()%>'],
                permissions: [
                    <%
                        Collection<CmPermissions> permissions=user.getPermissions();
                        int index=0;
                        for(CmPermissions permission:permissions){
                            if(index++>0)out.println(',');
                            out.print("'"+permission+"'");
                        }
                    %>
                ]
            })<%}else{%>null<%}%>,
            date: Ext.merge(Config.date, {
                patterns: {
                    ISO8601Long: '${properties['app.config.dateFormat.ISO8601Long']}',
                    ISO8601Short: '${properties['app.config.dateFormat.ISO8601Short']}'
                }
            })
        });
    </script>
    <script type="text/javascript" src="resources/CmApp/Util.js"></script>
    <script type="text/javascript" src="resources/CmApp/app.js"></script>
</head>
<body>
</body>
</html>
