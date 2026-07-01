import linkedinQrImage from './linkedin-qr.svg?url'
import speakerData from './speaker.json'

export const person = {
  ...speakerData,
  linkedin: {
    ...speakerData.linkedin,
    qrImage: linkedinQrImage
  }
}
