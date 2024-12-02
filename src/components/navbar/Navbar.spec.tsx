import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { useNavigate } from '@tanstack/react-router'
import { useKeycloak } from '@react-keycloak/web'
import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n/Translations'
import { t } from 'i18next'

vi.mock('@tanstack/react-router', () => ({
  useNavigate: vi.fn(),
}))

vi.mock('@react-keycloak/web', () => ({
  useKeycloak: vi.fn(),
}))

describe('Navbar', () => {
  const mockNavigate = vi.fn()
  const mockLogout = vi.fn()

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    vi.mocked(useKeycloak).mockReturnValue({ keycloak: { logout: mockLogout } })
  })

  const setup = () => {
    return render(
      <I18nextProvider i18n={i18next}>
        <Navbar />
      </I18nextProvider>,
    )
  }

  it('navigates to shopping list when lists button is clicked', () => {
    setup()

    const listsButton = screen.getByText(t('common.navbar.lists'))
    fireEvent.click(listsButton)

    console.log(mockNavigate.mock.calls) // Add this line to log the calls

    expect(mockNavigate).toHaveBeenCalledWith({ to: '/shopping-list' })
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })
})
