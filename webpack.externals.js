const webpack = require('webpack');
module.exports = {
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/common/http": "ng.common.http",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
        "@angular/compiler": "ng.compiler",
        "@angular/elements": "ng.elements",
        '@angular/animations': 'ng.animations',
        '@angular/forms': 'ng.forms',

        '@angular/cdk': 'ng.cdk',
        '@angular/cdk/a11y': 'ng.cdk.a11y',
        '@angular/cdk/accordion': 'ng.cdk.accordion',
        '@angular/cdk/bidi': 'ng.cdk.bidi',
        '@angular/cdk/coercion': 'ng.cdk.coercion',
        '@angular/cdk/collections': 'ng.cdk.collections',
        '@angular/cdk/keycodes': 'ng.cdk.keycodes',
        '@angular/cdk/layout': 'ng.cdk.layout',
        '@angular/cdk/observers': 'ng.cdk.observers',
        '@angular/cdk/overlay': 'ng.cdk.overlay',
        '@angular/cdk/platform': 'ng.cdk.platform',
        '@angular/cdk/portal': 'ng.cdk.portal',
        '@angular/cdk/scrolling': 'ng.cdk.scrolling',
        '@angular/cdk/table': 'ng.cdk.table',
        '@angular/cdk/textField': 'ng.cdk.textField',

        '@angular/material': 'ng.material',
        // Uncomment and add to scripts in angular.json if needed
        "@angular/router": "ng.router",
        '@digital/core': 'digital.core'
        // "@angular/forms": "ng.forms"
    }
}
