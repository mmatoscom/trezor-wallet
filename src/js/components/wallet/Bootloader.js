/* @flow */
'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Bootloader = (props: any): any => {
    return (
        <section className="acquire">
            <h3>Bootloader mode</h3>
        </section>
    );
}

const mapStateToProps = (state, own) => {
    return {
    
    };
}

const mapDispatchToProps = (dispatch) => {
    return { 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bootloader);