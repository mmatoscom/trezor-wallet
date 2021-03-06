/* @flow */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';

import SendFormActions from 'actions/ripple/SendFormActions';
import { openQrModal } from 'actions/ModalActions';
import type { State, Dispatch } from 'flowtype';
import AccountSend from './index';

type OwnProps = {|
    intl: IntlShape,
|};

export type StateProps = {|
    selectedAccount: $ElementType<State, 'selectedAccount'>,
    sendForm: $ElementType<State, 'sendFormRipple'>,
    wallet: $ElementType<State, 'wallet'>,
    fiat: $ElementType<State, 'fiat'>,
    localStorage: $ElementType<State, 'localStorage'>,
|};

export type DispatchProps = {|
    sendFormActions: typeof SendFormActions,
    openQrModal: typeof openQrModal,
|};

export type Props = {| ...OwnProps, ...StateProps, ...DispatchProps |};

const mapStateToProps = (state: State): StateProps => ({
    selectedAccount: state.selectedAccount,
    sendForm: state.sendFormRipple,
    wallet: state.wallet,
    fiat: state.fiat,
    localStorage: state.localStorage,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    sendFormActions: bindActionCreators(SendFormActions, dispatch),
    openQrModal: bindActionCreators(openQrModal, dispatch),
});

export default injectIntl(
    connect<Props, OwnProps, StateProps, DispatchProps, State, Dispatch>(
        mapStateToProps,
        mapDispatchToProps
    )(AccountSend)
);
