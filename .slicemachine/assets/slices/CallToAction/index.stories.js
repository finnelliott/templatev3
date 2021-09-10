import MyComponent from '../../../../slices/CallToAction';

export default {
  title: 'slices/CallToAction'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"heading":"reintermediate turn-key synergies","description":"brand best-of-breed supply-chains","callToActionLinkText":"e-enable B2B ROI","callToActionLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _PanelWithScreenshot = () => <MyComponent slice={{"variation":"panelWithScreenshot","name":"Panel With Screenshot","slice_type":"call_to_action","items":[],"primary":{"heading":"orchestrate e-business applications","description":"reinvent visionary relationships","callToActionLinkText":"orchestrate end-to-end ROI","callToActionLink":{"link_type":"Web","url":"http://twitter.com"},"screenshot":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"}},"id":"_PanelWithScreenshot"}} />
_PanelWithScreenshot.storyName = 'Panel With Screenshot'

export const _SimpleJustified = () => <MyComponent slice={{"variation":"simpleJustified","name":"Simple Justified","slice_type":"call_to_action","items":[],"primary":{"heading":"embrace web-enabled partnerships","description":"synergize innovative models","callToActionLinkText":"scale back-end web-readiness","callToActionLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_SimpleJustified"}} />
_SimpleJustified.storyName = 'Simple Justified'
