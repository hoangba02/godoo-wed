import React, { useRef, useState } from 'react';
import {
  Button,
  Input,
  SegmentedControl,
  Select,
  TextInput,
} from '@mantine/core';
import { ReactComponent as X } from 'assets/icons/edit/x.svg';
import { ReactComponent as IconChevronDown } from 'assets/icons/setting/chevronRight.svg';

const careerMap = [
  'Human Services',
  'Food & Natural Resources',
  'Agriculture',
  'Business',
  'Management & Administration',
  'Communications & Information Systems',
  'Engineering',
  'Manufacturing & Technology',
  'Health Science Technology',
  'Others',
];
function Career() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [careerInfo, setCareerInfo] = useState({
    job: '',
    income: '',
  });
  const [field, setField] = useState<string | null>(careerMap[0]);
  const handleChange = e => {
    setCareerInfo({ ...careerInfo, [e.target.name]: e.target.value });
  };
  const handleClearNickname = () => {
    setCareerInfo({ ...careerInfo, job: '' });
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };
  console.log(careerInfo);
  return (
    <>
      <Input.Wrapper
        sx={{
          position: 'relative',
          marginBottom: 8,
        }}
      >
        <TextInput
          styles={{
            input: {
              height: '55px',
              marginTop: 4,
            },
          }}
          ref={inputRef}
          label="I'm a"
          name="job"
          value={careerInfo.job}
          onChange={handleChange}
        />
        {careerInfo.job && (
          <Button
            sx={{
              width: '24px !important',
              height: '24px !important',
              padding: 0,
              position: 'absolute',
              right: 10,
              top: '55%',
            }}
            variant="subtle"
            onClick={handleClearNickname}
          >
            <X />
          </Button>
        )}
      </Input.Wrapper>
      <Select
        label="in field"
        value={field}
        onChange={setField}
        rightSection={<IconChevronDown />}
        rightSectionWidth={30}
        data={careerMap}
        styles={{
          rightSection: {
            pointerEvents: 'none',
            transform: 'rotate(90deg)',
            marginRight: 5,
          },
          item: {
            textAlign: 'center',
            '&[data-selected]': {
              backgroundColor: '#FFE9E0',
              '&, &:hover': {
                backgroundColor: 'var(--light)',
                color: 'var(--black)',
              },
            },
            '&:hover': {
              backgroundColor: '#FFE9E0',
              color: 'var(--black)',
            },
          },
          input: {
            lineHeight: '22.5px',
          },
          dropdown: {
            '& > div': {
              maxHeight: 'max-content !important',
            },
          },
        }}
      />
      <Input.Wrapper
        sx={{
          position: 'relative',
          marginTop: 8,
        }}
      >
        <TextInput
          styles={{
            input: {
              height: '55px',
              marginTop: 4,
            },
          }}
          maxLength={15}
          label="My income per month"
          name="income"
          value={careerInfo.income}
          onChange={handleChange}
        />
        <SegmentedControl
          styles={{
            root: {
              width: 99,
              height: 32,
              borderRadius: 10,
              position: 'absolute',
              right: 10,
              top: '50%',
            },
            label: {
              width: '100%',
              height: '100%',
              padding: '0 2.5px',
              fontSize: 12,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            labelActive: {
              height: '100%',
            },
            controlActive: {
              width: '100%',
              height: 24,
            },
          }}
          size="sm"
          color="orange.7"
          radius={8}
          // value={optionTime}
          // onChange={setOptionTime}
          transitionDuration={500}
          data={[
            { label: 'VND', value: 'VND' },
            { label: 'USA', value: 'USA' },
          ]}
        />
      </Input.Wrapper>
    </>
  );
}

export default Career;
