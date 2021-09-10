import MyComponent from '../../../../slices/Features1';

export default {
  title: 'slices/Features1'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"features1","items":[],"primary":{"title":[{"type":"heading1","text":"Engineer turn-key ROI","spans":[]}],"description":[{"type":"paragraph","text":"Enim commodo Lorem voluptate eu consectetur. Duis aliqua sit aliquip ullamco elit sint velit dolor et Lorem.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _V2 = () => <MyComponent slice={{"variation":"v2","name":"V2","slice_type":"features1","items":[],"primary":{"title":[{"type":"heading1","text":"Implement intuitive deliverables","spans":[]}],"description":[{"type":"paragraph","text":"Ex esse voluptate eu ad duis. Aliqua do cupidatat nulla deserunt culpa eiusmod. Eiusmod sunt et ex incididunt aliqua.","spans":[]}]},"id":"_V2"}} />
_V2.storyName = 'V2'
