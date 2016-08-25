'use strict';

var IndexModel = require('../models/index');
var MenuBarModel = require('../models/menu-bar');
var FooterTopArea = require('../models/footer-top-area');

module.exports = function (router) {

    router.get('/', function (req, res) {
        
        res.render('landing', { menuBar: new MenuBarModel(), footerTopArea: new FooterTopArea().data, footerTopAreaSchm: new FooterTopArea().schema });
        
    });

/*
	router.post('/sending-email', function (req, res) {
        fs.readFile(req.files.archivo.path, function (err,data) {
            if (err) {
                return console.log(err);
            }
            mail.send({
                template: 'formcontactemp',
                message: {
                    to: 'pablocid@agroinformatica.cl',
                    from:'Contacto <pablocid@agroinformatica.cl>',
                    subject: 'Email desde formulario de contacto',
                    data: {
                        name:req.body.name,
                        content:req.body.message,
                        email:req.body.email
                    },
                    attachments: [
                        {
                            filename:req.files.archivo.name,
                            contents:data
                        }
                    ]
                },
                create: {
                    service: 'zoho',
                    auth: {
                        user: 'pablocid@agroinformatica.cl',
                        pass: process.env.zoho
                    }
                }
            }, function(){
                console.log('Enviando ...');
            });

            res.status(200).json({ status: 'ok'});
        });

    });
*/
};


/*
{>"layouts/service-features" /}
	{>"layouts/minimal-carousel" /}
	{>"layouts/promo-area" /}
	{>"layouts/why-choose-us" /}
	{>"layouts/home-cta" /}
	{>"layouts/case-study" /}
	{>"layouts/pricing-section" /}
	{>"layouts/testimonial-section" /}
	{>"layouts/client-carousel" /}
	{>"layouts/latest-news-area" /}
	{>"layouts/real-time-analytics" /}
	{>"layouts/fact-counter" /}
	{>"layouts/service-features-two" /}
	{>"layouts/service-section" /}
	{>"layouts/testimonial-style-two" /}
	{>"layouts/get-a-qoute" /}
	{>"layouts/inner-banner" /}
	{>"layouts/about-info" /}
	{>"layouts/team-section" /}
	{>"layouts/chart-section" /}
	{>"layouts/case-study-masonary" /}
	{>"layouts/blog-page" /}
	{>"layouts/challenge-box" /}
*/