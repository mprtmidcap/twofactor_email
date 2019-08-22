import Axios from 'nextcloud-axios';
import {generateUrl} from 'nextcloud-server/dist/router'

export function getVerificationState () {
	let url = generateUrl('/apps/twofactor_email/settings/state')

	return Axios.get(url).then(resp => {
		resp.data.isAvailable = true
		return resp.data
	}).catch(err => {
		isAvailable: false
	})
}

export function startVerification () {
	let url = generateUrl('/apps/twofactor_email/settings/enable')

	return Axios.post(url).then(resp => resp.data)
}


export function tryVerification (code) {
	let url = generateUrl('/apps/twofactor_email/settings/validate')

	return Axios.post(url, {
			verificationCode: code
		}).then(resp => resp.data)
}

export function disable () {
	let url = generateUrl('/apps/twofactor_email/settings/disable')

	return Axios.delete(url).then(resp => resp.data)
}
