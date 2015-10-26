/*global describe, it */
'use strict';
var openfinLauncher = require('../'),
    expect = require('chai').expect;

describe('openfin-launcher', function() {
    describe('launchOpenFin function', function() {
        it('should exist', function() {
            expect(openfinLauncher.launchOpenFin).not.be.undefined();
        });
    });
});

/*
running from command line to test... 

openfinLauncher = require('./index');
openfinLauncher.launchOpenFin({configPath: 'http://local:8080/app.json', rvmPath: './OpenFinRVM.exe'});

 */