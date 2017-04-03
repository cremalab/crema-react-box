import React from 'react'
import Box from '.'
import { shallow } from 'enzyme'

describe('Box', () => {

  it('renders',
    () => expect(shallow(<Box />).length).toBe(1)
  )

  describe('structure', () => {

    const wrapper = shallow(
      <Box>
        <Box/>
        <Box/>
        <Box/>
      </Box>
    )

    it('renders BoxContainer',
      () => {
        const actual = wrapper.first().name()
        expect(actual).toBe('BoxContainer')
      }
    )

    it('renders BoxContainer/BoxChildren',
      () => {
        const actual = wrapper.first().children().name()
        expect(actual).toBe('BoxChildren')
      }
    )

    it('renders BoxContainer/BoxChildren/BoxChild',
      () => {
        const actual = wrapper.first().children().first().children().first().name()
        expect(actual).toBe('BoxChild')
      }
    )

    it('renders children',
      () => {
        const actual = wrapper.find('Box').length
        expect(actual).toBe(3)
      }
    )

  })

  describe('props', () => {

    it('non-style props are passed to BoxContainer only',
      () => {
        const BoxContainer = shallow(
          <Box
            padding='20px'
            onClick={true}
          >
            <Box/>
          </Box>
        )
        const BoxChildren  = BoxContainer.find('BoxChildren')
        const BoxChild     = BoxChildren.find('BoxChild')

        expect(BoxContainer.prop('styleProps').padding).toBeTruthy()
        expect(BoxContainer.prop('onClick')).toBeTruthy()
        expect(BoxChildren.prop('styleProps').padding).toBeTruthy()
        expect(BoxChildren.prop('onClick')).toBeFalsy()
        expect(BoxChild.prop('styleProps').padding).toBeTruthy()
        expect(BoxChild.prop('onClick')).toBeFalsy()
      }
    )

  })

})
